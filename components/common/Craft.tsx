import { cn } from '@/lib/utils';

export interface BaseProps {
  children?: React.ReactNode;
  className?: string;
  id?: string;
}

const styles = {
  layout: {
    spacing: '[&>*+*]:mt-6',
    article: 'max-w-prose',
    container: 'max-w-7xl mx-auto p-4 sm:p-8',
    section: 'py-8 md:py-12',
  },
};

export const Section = ({ children, className, id }: BaseProps) => (
  <section className={cn(styles.layout.section, className)} id={id}>
    {children}
  </section>
);

export const Container = ({ children, className, id }: BaseProps) => (
  <div className={cn(styles.layout.container, className)} id={id}>
    {children}
  </div>
);
