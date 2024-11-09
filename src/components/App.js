import { Suspense } from "react";
import { ServerComponent } from "./ServerComponent";
import { ClientComponent } from "./ClientComponent";

export default async function App() {
    return <div className="main">
        <Suspense fallback={<div>loading...</div>}>
            <ServerComponent />
        </Suspense>
        <ClientComponent />
    </div>;
}
