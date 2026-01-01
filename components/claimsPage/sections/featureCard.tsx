import { LucideIcon } from 'lucide-react';
import { headingSm, bodyText } from '../../ui/typography';
import { featureIcon, featureIconBlue } from '../../ui/iconStyles';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6">
      <div className={`${featureIcon} ${featureIconBlue}`}>
        <Icon className="h-6 w-6" />
      </div>

      <h3 className={headingSm}>{title}</h3>
      <p className={bodyText}>{description}</p>
    </div>
  );
}
