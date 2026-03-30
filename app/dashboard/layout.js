export const metadata = {
  title: "Dashboard Page",
  description: "This is our dashboard page",
};

export default function DashboardLayout({ children }) {
    return (
        <>
            <div className="border-b border-red-400">
                <ul className="flex gap-5 justify-center items-center">
                    <li>Analytics</li>
                    <li>Settings</li>
                </ul>
            </div>
            {children}
        </>
    );
}