import { cn } from "@/lib/utils";

const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("w-full max-w-[1500px] px-[10px] mx-auto", className)}>
      {children}
    </div>
  );
};

export default Container;
