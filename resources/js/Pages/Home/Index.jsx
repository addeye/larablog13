import Layout from "../Layout";
import { Head } from "@inertiajs/react";
import { ArrowUpIcon } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Show() {
  return (
    <Layout>
        <Head title="Welcome" />
        <h1>Welcome Home</h1>
        <p>Hello welcome to your first Inertia app!</p>

    <div className="flex flex-wrap items-center gap-2 md:flex-row">
        <Button variant="outline">Button</Button>
        <Button variant="outline" size="icon" aria-label="Submit">
            <ArrowUpIcon />
        </Button>
    </div>
    </Layout>
  );
}
