import React from "react";

export const Header: React.FC = () => {
  return (
    <header className="justify-between items-center flex w-full gap-[40px_100px] flex-wrap p-5 border-[Global.Stroke.Width.05] border-solid border-[NeutralStroke3.Rest] max-md:max-w-full">
      <div className="self-stretch flex items-center gap-2 text-sm text-[#424242] font-semibold whitespace-nowrap leading-5 my-auto">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/ea9d9d7c994b4302a357b7bba73c5fba/1c5767423b048c683b50e02dc3dccfc623023d16?placeholderIfAbsent=true"
          alt="Logo"
          className="aspect-[1.16] object-contain w-9 self-stretch shrink-0 my-auto"
        />
        <button className="items-center rounded self-stretch flex gap-1.5 pr-[var(--Horizontal-M,] pl-[var(--Horizontal-M,] my-auto py-[6px)]">
          <div className="justify-center items-center self-stretch flex h-5 gap-1 my-auto">
            <span className="text-ellipsis self-stretch min-h-[22px] my-auto pb-0.5">
              Hannahs
            </span>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/ea9d9d7c994b4302a357b7bba73c5fba/39ddf5bd4810bc9d03a29b75fa181834f11ad964?placeholderIfAbsent=true"
              alt="Dropdown"
              className="aspect-[1] object-contain w-3 self-stretch shrink-0 my-auto"
            />
          </div>
        </button>
      </div>

      <div className="items-center self-stretch flex gap-2 my-auto">
        <div className="self-stretch flex items-center gap-3 my-auto">
          <button className="items-center rounded self-stretch flex gap-1.5 pr-[var(--Horizontal-M,] my-auto pl-[}] pt-[6px)] pb-[12px;]">
            <div className="justify-center items-center self-stretch flex gap-1 my-auto">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/ea9d9d7c994b4302a357b7bba73c5fba/d529907f739d6cf66138eacd70e6094d90c9b02f?placeholderIfAbsent=true"
                alt="Settings"
                className="aspect-[1] object-contain w-5 self-stretch shrink-0 my-auto"
              />
              <img
                src="https://cdn.builder.io/api/v1/image/assets/ea9d9d7c994b4302a357b7bba73c5fba/38a6f1b36d08172f7d2d08f8167295d85fea1875?placeholderIfAbsent=true"
                alt="Dropdown"
                className="aspect-[1] object-contain w-3 self-stretch shrink-0 my-auto"
              />
            </div>
          </button>
        </div>

        <div className="self-stretch flex items-center gap-3 text-sm text-[#424242] font-semibold leading-5 my-auto">
          <button className="items-center rounded self-stretch flex gap-1.5 pr-[var(--Horizontal-M,] my-auto pl-[}] pt-[6px)] pb-[12px;]">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/ea9d9d7c994b4302a357b7bba73c5fba/2ca2f275b8b7ef6d8a919bd65863202cc7b2a240?placeholderIfAbsent=true"
              alt="User"
              className="aspect-[1] object-contain w-5 self-stretch shrink-0 my-auto"
            />
            <div className="justify-center items-center self-stretch flex h-5 gap-1 my-auto">
              <span className="text-ellipsis self-stretch min-h-[22px] my-auto pb-0.5">
                User name
              </span>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/ea9d9d7c994b4302a357b7bba73c5fba/38a6f1b36d08172f7d2d08f8167295d85fea1875?placeholderIfAbsent=true"
                alt="Dropdown"
                className="aspect-[1] object-contain w-3 self-stretch shrink-0 my-auto"
              />
            </div>
          </button>
        </div>
      </div>
    </header>
  );
};
