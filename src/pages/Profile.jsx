export default function Profile(){
    return (
        <div className="max-w-2xl mx-auto">
            <h1 className="text-2xl font-bold mb-6">Profile</h1>
            <div className="bg-whit rounded-lg shadow p-6">
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Name
                        </label>
                        <p className="mt-1 text-lg">user fullname</p>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <p className="mt-1 text-lg">user email</p>
                    </div>
                </div>
            </div>
        </div>
    )
}