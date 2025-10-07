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

  it('should have correct spacing before the header (tagline margin)', () => {
    const { container } = render(<Hero />)
    const tagline = container.querySelector('.tracking-widest')

    expect(tagline).toHaveClass('mb-16')
    expect(tagline).toHaveClass('md:mb-20')
  })

  it('should have correct spacing between text and CTA (description margin)', () => {
    const { container } = render(<Hero />)
    const description = container.querySelector('.leading-relaxed')

    expect(description).toHaveClass('mb-8')
    expect(description).not.toHaveClass('mb-30')
  })

  it('should not have extra margin after CTA button', () => {
    const { container } = render(<Hero />)
    const ctaContainer = container.querySelector('.inline-flex')?.parentElement

    // The motion.div wrapping the CTA should not have mb-8 anymore
    expect(ctaContainer).not.toHaveClass('mb-8')
  })

  it('should maintain hero section structure without changing height', () => {
    const { container } = render(<Hero />)
    const heroSection = container.querySelector('.hero-section')

    // Verify the hero section still has its original padding
    expect(heroSection).toHaveClass('pt-24')
    expect(heroSection).toHaveClass('pb-20')
  })

  it('should render the CTA button with correct text', () => {
    render(<Hero />)
    expect(screen.getByText('Book Your Consultation')).toBeInTheDocument()
  })
})
