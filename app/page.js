import LogoutButton from "@/components/LogoutButton";

const Home = () => {
    return (
        <main className="bg-black flex flex-col justify-center items-center space-y-8 h-screen">
            <h1 className="text-gray-100 text-center text-2xl font-bold uppercase">
                You have logged in!
            </h1>
            <img 
                src="/treasure.png" 
                alt="Treasure chest illustration" 
                className="w-1/4 object-contain"
            />
            <LogoutButton />
        </main>
    );
};

export default Home;