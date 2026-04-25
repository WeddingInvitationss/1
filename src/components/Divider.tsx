import divider from "@/assets/divider.png";

export const Divider = ({ className = "" }: { className?: string }) => (
  <div className={`flex justify-center my-12 ${className}`}>
    <img src={divider} alt="" className="w-72 md:w-96 opacity-90" loading="lazy" />
  </div>
);
