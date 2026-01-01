import { Shield, Globe, Clock } from 'lucide-react';
import { FeatureCard } from './featureCard';

export function AdditionalFeatures() {
  return (
    <section className="max-w-5xl mx-auto mt-16">
      <div className="grid md:grid-cols-3 gap-8">
        <FeatureCard
          icon={Shield}
          title="Secure Access"
          description="Bank-grade security protecting your virtual card details."
        />
        <FeatureCard
          icon={Globe}
          title="Global Acceptance"
          description="Use your virtual card anywhere Mastercard is accepted."
        />
        <FeatureCard
          icon={Clock}
          title="Real-time Updates"
          description="Track transactions and balance updates instantly."
        />
      </div>
    </section>
  );
}
