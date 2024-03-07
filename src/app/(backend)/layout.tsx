import Sidebar from "@/components/backend/sidebar"

export default function DashboardLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <div className="flex h-screen w-full bg-gray-100">
        {/* Include shared UI here e.g. a header or sidebar */}
        <Sidebar />
        <div className="flex flex-col w-full h-full ml-64 p-4">
          {children}
        </div>
      </div>
    )
  }