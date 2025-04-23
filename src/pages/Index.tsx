import React from "react";
import { Header } from "@/components/layout/Header";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { DataTable } from "@/components/tables/DataTable";
import { SettingsDrawer } from "@/components/drawers/SettingsDrawer";

const breadcrumbItems = [
  { label: "Lists", path: "/lists" },
  { label: "My tasks", path: "/lists/tasks" },
  { label: "New", path: "/lists/tasks/new", current: true },
];

const tableColumns = [
  { header: "Instance", accessor: "instance" },
  { header: "Application", accessor: "application" },
  { header: "Initiator", accessor: "initiator" },
  { header: "Task created", accessor: "created" },
  { header: "Last instance", accessor: "lastInstance" },
  { header: "Performer", accessor: "performer" },
];

const sampleData = [
  {
    instance: "Instance 1",
    application: "App 1",
    initiator: "User 1",
    created: "2024-01-01",
    lastInstance: "2024-01-02",
    performer: "John Doe",
  },
  // Add more sample data as needed
];

export default function Index() {
  const [activeTab, setActiveTab] = React.useState("content");

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="flex w-full items-stretch flex-1 flex-wrap h-full pt-px max-md:max-w-full">
        <div className="bg-[color:var(--colorNeutralBackground2)] min-w-60 overflow-hidden gap-4 flex-1 shrink basis-[0%] px-8 py-4 max-md:max-w-full max-md:px-5">
          <div className="flex w-full flex-col max-md:max-w-full">
            <Breadcrumb items={breadcrumbItems} />
          </div>

          <div className="flex w-full items-center justify-between mt-4 max-md:max-w-full">
            <div className="self-stretch flex items-center">
              <div className="flex gap-2">
                <button
                  className={`rounded p-1.5 text-sm ${
                    activeTab === "content"
                      ? "text-[#242424] font-semibold"
                      : "text-[#424242] font-normal"
                  }`}
                  onClick={() => setActiveTab("content")}
                >
                  List content
                </button>
                <button
                  className={`rounded p-1.5 text-sm ${
                    activeTab === "permissions"
                      ? "text-[#242424] font-semibold"
                      : "text-[#424242] font-normal"
                  }`}
                  onClick={() => setActiveTab("permissions")}
                >
                  List permissions
                </button>
              </div>
            </div>

            <div className="flex gap-2.5">
              <button className="flex items-center gap-1 text-[#C50F1F] px-2 py-1 border rounded">
                <img src="https://cdn.builder.io/api/v1/image/assets/ea9d9d7c994b4302a357b7bba73c5fba/9edf3f02376442bffc3b98dd30bea994076c286f?placeholderIfAbsent=true" alt="Cancel" className="w-5 h-5" />
                <span>Cancel</span>
              </button>
              <button className="flex items-center gap-1 text-white bg-primary px-2 py-1 rounded">
                <img src="https://cdn.builder.io/api/v1/image/assets/ea9d9d7c994b4302a357b7bba73c5fba/6e58043773aa5722cdc76be6de703ddcc0f7cdd0?placeholderIfAbsent=true" alt="Save" className="w-5 h-5" />
                <span>Save</span>
              </button>
            </div>
          </div>

          <div className="bg-[color:var(--colorNeutralBackground1)] p-6 rounded-xl mt-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="block text-xs">Type of list</label>
                <select className="w-full bg-[#E3F7EF] rounded border p-1">
                  <option>Select type</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="block text-xs">Created</label>
                <select className="w-full bg-[#E3F7EF] rounded border p-1">
                  <option>Select date</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="block text-xs">Applications</label>
                <select className="w-full bg-[#E3F7EF] rounded border p-1">
                  <option>Select application</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="block text-xs">Status</label>
                <select className="w-full bg-[#E3F7EF] rounded border p-1">
                  <option>Select status</option>
                </select>
              </div>
            </div>
          </div>

          <DataTable
            columns={tableColumns}
            data={sampleData}
            title="Task List"
          />
        </div>

        <SettingsDrawer />
      </main>
    </div>
  );
}
