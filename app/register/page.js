import RegistrationForm from "@/components/RegistrationForm"

export default function Register() {
    return (
        <main className="flex h-screen">
            <div className="w-full md:w-3/5 lg:w-3/6 flex justify-center items-center">
                <RegistrationForm />
            </div>
            <div className="hidden w-2/5 lg:w-3/6 bg-[#0f0f16] md:flex items-center justify-center">
                <img
                    className="w-2/4 object-contain"
                    src="/login.png"
                    alt=""
                />
            </div>
        </main>
    )
}