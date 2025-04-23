import React from "react";

export const SettingsDrawer: React.FC = () => {
  return (
    <aside className="min-w-60 w-[252px]">
      <div className="min-w-[82px] max-w-xs w-full flex-1 rounded-[Global.Corner.Radius.None]">
        <div className="w-full">
          <div className="flex w-full gap-2 pl-6 pr-4 pt-6 pb-3 max-md:pl-5">
            <div className="flex w-full gap-2 flex-1 shrink basis-[0%]">
              <h2 className="self-stretch gap-2.5 text-base text-[#242424] font-bold whitespace-nowrap text-justify leading-none flex-1 shrink basis-[0%] py-[3px]">
                Settings
              </h2>
              <button className="justify-center items-center flex w-6 h-6 pr-[var(--Horizontal-XXS,] pl-[}] pt-[2px)] pb-[2px;] rounded-[4px)_4px_4px_4p]">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/ea9d9d7c994b4302a357b7bba73c5fba/189cd4f93b3730ed10949a5c1c36a237efd10ea5?placeholderIfAbsent=true"
                  alt="Close"
                  className="aspect-[1] object-contain w-5 self-stretch my-auto"
                />
              </button>
            </div>
          </div>
        </div>

        <div className="w-full flex-1 gap-6 px-6 max-md:px-5">
          <form className="flex w-full flex-col items-stretch justify-center">
            <div className="w-full whitespace-nowrap">
              <label className="block text-sm font-semibold mb-0.5">Name</label>
              <input
                type="text"
                className="w-full text-xs px-2 py-1.5 border rounded"
                placeholder="Name"
              />
            </div>

            <div className="w-full mt-4">
              <label className="block text-sm font-semibold mb-0.5 flex items-center gap-1">
                List group/category
                <img src="https://cdn.builder.io/api/v1/image/assets/ea9d9d7c994b4302a357b7bba73c5fba/42537d51a2235e1796a2e2b0b3b0f63f63c306c6?placeholderIfAbsent=true" alt="Info" className="w-5 h-5" />
              </label>
              <select className="w-full text-xs px-2 py-1.5 border rounded bg-[#E3F7EF]">
                <option>Select category</option>
              </select>
            </div>

            <div className="min-h-[116px] w-full mt-6">
              <label className="block text-sm font-semibold mb-0.5">
                Description
              </label>
              <textarea
                className="w-full text-sm p-2.5 border rounded bg-[#E3F7EF]"
                rows={4}
                defaultValue="lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
              />
            </div>
          </form>
        </div>
      </div>
    </aside>
  );
};
