import { render, screen } from '@testing-library/react'
import Hero from '../Hero'
import { useParams } from 'next/navigation'
import { useTranslations } from '../../app/i18n/client'

// Mock dependencies
jest.mock('next/navigation', () => ({
  useParams: jest.fn(),
}))

jest.mock('../../app/i18n/client', () => ({
  useTranslations: jest.fn(),
}))

jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, className, ...props }: any) => <div className={className} {...props}>{children}</div>,
    p: ({ children, className, ...props }: any) => <p className={className} {...props}>{children}</p>,
    h1: ({ children, className, ...props }: any) => <h1 className={className} {...props}>{children}</h1>,
    h2: ({ children, className, ...props }: any) => <h2 className={className} {...props}>{children}</h2>,
  },
  useScroll: () => ({ scrollY: { get: () => 0 } }),
  useTransform: () => ({ get: () => 1 }),
}))

describe('Hero Component - White Space Fixes', () => {
  beforeEach(() => {
    (useParams as jest.Mock).mockReturnValue({ lang: 'en' })
    ;(useTranslations as jest.Mock).mockReturnValue({
      hero: {
        tagline: "MONTREAL'S TRUSTED PAIN TREATMENT PROFESSIONALS SINCE 2007",
        title: 'Break Free From Pain',
        subtitle: 'Hurt Less',
        description: 'Modern, evidence-based treatment approaches integrating Modern Chiropractic, Biomechanics and Applied Kinesiology to accelerate your pain relief and get you back to living your best life.',
      },
    })
  })

  it('should render the Hero component', () => {
    render(<Hero />)
    expect(screen.getByText('Break Free From Pain')).toBeInTheDocument()
  })

  it('should have moved spacing from bottom to top (50% redistribution)', () => {
    const { container } = render(<Hero />)
    const heroSection = container.querySelector('.hero-section')

    // Space moved from pb-20 to pt-32 (half of pb-20 which is 10 = 40px moved up)
    expect(heroSection).toHaveClass('pt-32')
    expect(heroSection).toHaveClass('pb-12')
  })

  it('should maintain proper internal spacing', () => {
    const { container } = render(<Hero />)
    const tagline = container.querySelector('.tracking-widest')
    const description = container.querySelector('.leading-relaxed')

    // Original spacing should be maintained
    expect(tagline).toHaveClass('mb-12')
    expect(tagline).toHaveClass('md:mb-16')
    expect(description).toHaveClass('mb-16')
  })

  it('should maintain total section height', () => {
    const { container } = render(<Hero />)
    const heroSection = container.querySelector('.hero-section')

    // pt-32 + pb-12 = 44 units total (same as original pt-24 + pb-20 = 44)
    expect(heroSection).toHaveClass('pt-32')
    expect(heroSection).toHaveClass('pb-12')
  })

  it('should render the CTA button with correct text', () => {
    render(<Hero />)
    expect(screen.getByText('Book Your Consultation')).toBeInTheDocument()
  })
})
