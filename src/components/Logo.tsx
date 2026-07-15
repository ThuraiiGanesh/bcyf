interface LogoProps {
  className?: string;
  light?: boolean;
}

export default function Logo({ className = '' }: LogoProps) {
  return (
    <img
      src="/2026-BCYF-Logo.png"
      alt="Business China Youth Forum 2025"
      className={className}
      style={{ objectFit: 'contain', objectPosition: 'left center' }}
    />
  );
}
