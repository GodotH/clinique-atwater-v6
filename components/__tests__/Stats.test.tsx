import { render, screen } from '@testing-library/react'
import Stats from '../Stats'
import { useTranslations } from '../../app/i18n/client'

// Mock dependencies
jest.mock('../../app/i18n/client', () => ({
  useTranslations: jest.fn(),
}))

jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, className, ...props }: any) => <div className={className} {...props}>{children}</div>,
  },
  useInView: () => true,
}))

describe('Stats Component - Circle Alignment Fix', () => {
  beforeEach(() => {
    ;(useTranslations as jest.Mock).mockReturnValue({
      benefits: {
        stats: {
          experienceLabel: 'Years of Service',
          patientsLabel: 'Patients Served',
          approachesLabel: 'Scientific Approaches',
          satisfactionLabel: 'Patient Satisfaction',
        },
      },
    })
  })

  it('should render the Stats component', () => {
    render(<Stats />)
    expect(screen.getByText('Experience You Can Count On')).toBeInTheDocument()
  })

  it('should render all four stat cards', () => {
    render(<Stats />)
    expect(screen.getByText('18+')).toBeInTheDocument()
    expect(screen.getByText('4500+')).toBeInTheDocument()
    expect(screen.getByText('3')).toBeInTheDocument()
    expect(screen.getByText('96%')).toBeInTheDocument()
  })

  it('should have overflow-visible on stat cards for circle alignment', () => {
    const { container } = render(<Stats />)
    const statCards = container.querySelectorAll('.rounded-2xl')

    statCards.forEach((card) => {
      expect(card).toHaveClass('overflow-visible')
      expect(card).not.toHaveClass('overflow-hidden')
    })
  })

  it('should apply correct translation classes to top-positioned circles', () => {
    const { container } = render(<Stats />)
    const statCards = container.querySelectorAll('.rounded-2xl')

    // Check for circles with top positioning
    statCards.forEach((card) => {
      const circle = card.querySelector('[class*="top-0"]')
      if (circle) {
        expect(circle).toHaveClass('-translate-y-1/2')
      }
    })
  })

  it('should apply correct translation classes to bottom-positioned circles', () => {
    const { container } = render(<Stats />)
    const statCards = container.querySelectorAll('.rounded-2xl')

    // Check for circles with bottom positioning
    statCards.forEach((card) => {
      const circle = card.querySelector('[class*="bottom-0"]')
      if (circle) {
        expect(circle).toHaveClass('translate-y-1/2')
      }
    })
  })

  it('should render stat labels correctly', () => {
    render(<Stats />)
    expect(screen.getByText('Years of Service')).toBeInTheDocument()
    expect(screen.getByText('Patients Served')).toBeInTheDocument()
    expect(screen.getByText('Scientific Approaches')).toBeInTheDocument()
    expect(screen.getByText('Patient Satisfaction')).toBeInTheDocument()
  })

  it('should maintain card structure with decorative circles', () => {
    const { container } = render(<Stats />)
    const decorativeCircles = container.querySelectorAll('[class*="rounded-bl-full"], [class*="rounded-tr-full"], [class*="rounded-br-full"]')

    // Should have 4 decorative circles (one for each stat)
    expect(decorativeCircles.length).toBeGreaterThanOrEqual(4)
  })
})
