import React from "react";
import { Link } from "react-router-dom";

interface BreadcrumbItem {
  label: string;
  path: string;
  current?: boolean;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav aria-label="Breadcrumb" className="flex">
      {items.map((item, index) => (
        <div key={item.path} className="items-center flex">
          <Link
            to={item.path}
            className={`justify-center items-center rounded self-stretch flex gap-1 text-xs ${
              item.current
                ? "text-[#424242] font-semibold"
                : "text-[#424242] font-normal"
            } whitespace-nowrap leading-4 pr-[var(--Horizontal-S,] pl-[var(--Horizontal-S,] my-auto py-[2px)]`}
          >
            <div className="justify-center items-center self-stretch flex min-h-5 gap-1 my-auto">
              <div className="self-stretch min-h-5 my-auto py-0.5">
                {item.label}
              </div>
            </div>
          </Link>

          {index < items.length - 1 && (
            <div className="self-stretch flex items-center w-3 my-auto">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/ea9d9d7c994b4302a357b7bba73c5fba/ff695578297fc806fe104de611a044b7b9346b91?placeholderIfAbsent=true"
                alt="Separator"
                className="aspect-[1] object-contain w-3 self-stretch my-auto"
              />
            </div>
          )}
        </div>
      ))}
    </nav>
  );
};
