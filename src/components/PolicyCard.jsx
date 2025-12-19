import { Truck, ShieldCheck, Globe, Clock } from "lucide-react";

const policies = [
  {
    title: "Fast Delivery",
    icon: <Clock className="h-12 w-12 animate-bounce" />,
  },
  {
    title: "100% Authentic Products",
    icon: <ShieldCheck className="h-12 w-12 animate-pulse" />,
  },
  {
    title: "Delivery All Over Bangladesh",
    icon: <Globe className="h-12 w-12 animate-spin" />,
  },
  {
    title: "Trusted Service",
    icon: <Truck className="h-12 w-12 animate-bounce" />,
  },
];

export default function CompanyPolicyCards() {
  return (
    <section className="w-full py-12 -mt-3">
      <div className="mx-auto max-w-[1400px] px-4">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {policies.map((item, index) => (
            <div
              key={index}
              className="group rounded border border-border bg-background p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg flex flex-col items-center justify-center"
            >
              <div className="mb-4 inline-flex items-center justify-center">
                {item.icon}
              </div>

              <h3 className="text-lg font-semibold text-foreground text-center">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
