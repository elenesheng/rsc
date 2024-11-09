export async function ServerComponent() {
    const response = await fetch('http://localhost:3000/getmessage');
    const { message } = await response.json();

    return (
        <div className="bg-gray-200 p-4 rounded-md">
            <h2 className="text-lg font-bold mb-2">Server Component</h2>
            <p>{message}</p>
        </div>
    );
}
