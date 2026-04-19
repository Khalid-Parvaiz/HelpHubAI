export default function Section() {
    return (
        <>
            <section className="w-auto mt-20 mb-20">
                <main className="w-auto h-auto flex justify-center gap-15" >
                    <div className="w-[40%] h-auto shadow-2xl p-10 rounded-4xl" >
                        <p className="text-[10px] font-bold tracking-widest text-[rgb(16,130,120)] uppercase mb-4">Smit Grand Coding Night 2026</p>
                        <h1 className="text-[55px] font-semibold">Find help faster. Become help that matters.</h1>
                        <p className="text-gray-500 text-[15px] mb-8 ">
                            HelpHub AI is a community-powered support network for students, mentors, creators, and builders. Ask for help, track impact, and let AI surface smarter matches. Across the platform
                        </p>
                        <div className="flex gap-4 mb-12">
                            <button className="w-40 p-2.5 bg-gradient-to-r from-[rgb(17,143,132)] to-[rgb(20,168,153)] rounded-4xl text-white font-medium text-center text-sm cursor-pointer">Open product demo</button>
                            <button className="bg-white font-bold p-2.5 rounded-3xl shadow-2xl">Post a request</button>
                        </div>

                        <div className="flex w-[100%] justify-between">
                            <div className="p-5 w-40 h-50 shadow-2xl flex flex-col items-start justify-between rounded-3xl">
                                <p className="text-sm font-bold text-[rgb(20,168,153)] mb-2">MEMBERS</p>
                                <h2 className="text-4xl font-bold">384+</h2>
                                <p className="text-[12px] text-gray-500 font-medium">Students, mentors, and helpers in the loop.</p>
                            </div>
                            <div className="p-5 w-40 h-50 shadow-2xl flex flex-col items-start justify-between rounded-3xl">
                                <p className="text-sm font-bold text-[rgb(20,168,153)] mb-2">REQUESTS</p>
                                <h2 className="text-4xl font-bold">72+</h2>
                                <p className="text-[12px] text-gray-500 font-medium">Support posts shared across learning jouneys.</p>
                            </div>
                            <div className="p-5 w-40 h-50 shadow-2xl flex flex-col items-start justify-between rounded-3xl">
                                <p className="text-sm font-bold text-[rgb(20,168,153)] mb-2">SOLVED</p>
                                <h2 className="text-4xl font-bold">69+</h2>
                                <p className="text-[12px] text-gray-500 font-medium">Problems resolved through fast community actions.</p>
                            </div>

                        </div>
                    </div>
                    <div className="w-[30%] bg-[rgb(19,47,43)] p-10 rounded-4xl text-[rgb(255,249,242)] shadow-2xl">
                        <div className="absolute top-8 right-8 w-20 h-20 bg-yellow-400 rounded-full opacity-40"></div>
                        <p className=" text-[10px] font-bold tracking-widest  uppercase mb-4">Live Product Feel </p>
                        <h2 className="text-4xl font-bold mb-6">More than a form.<br />More like an ecosystem. </h2>
                        <p className="text-md  mb-10">A polished multi-page experience inspired by product platforms, with AI summaries, trust scores, contribution signals, notification, and leaderboard momentum built directly in HTML, CSS, Javascript, and localStorage. </p>

                        <div className="flex flex-col gap-5">
                            <div className="w-[100%] h-30 bg-[rgb(255,249,242)] rounded-2xl text-[rgb(19,47,43)] p-5 flex flex-col justify-between">
                                <h4 className="font-bold mb-1">AI request intelligence</h4>
                                <p className="text-sm">Auto-categorization, urgency detection, tags, rewrite suggestion and trend snapshots.</p>
                            </div>
                            <div className="w-[100%] h-30 bg-[rgb(255,249,242)] rounded-2xl text-[rgb(19,47,43)] p-5 flex flex-col justify-between">
                                <h4 className="font-bold mb-1">Community trust graph</h4>
                                <p className="text-sm">Badges, helper rankings, trust score boosts, and visible history.</p>
                            </div>
                            <div className="w-[100%] h-30 bg-[rgb(255,249,242)] rounded-2xl text-[rgb(19,47,43)] p-5 flex flex-col justify-between">
                                <h4 className="font-bold mb-1">100%</h4>
                                <p className="text-sm">Top trust score currently active across the sample mentor network.</p>
                            </div>
                        </div>
                    </div>
                </main>
            </section>
            

            {/* <section className="max-w-7xl mx-auto mb-20">
                <div className="flex justify-between items-end mb-8">
                    <div>
                        <p className="text-[10px] font-bold text-gray-400 uppercase mb-2">Core Flow</p>
                        <h2 className="text-4xl font-bold">From struggling alone to solving together</h2>
                    </div>
                    <button className="bg-white border border-gray-200 px-6 py-2 rounded-full text-sm font-bold">Try onboarding AI</button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-[#fffbf0] p-8 rounded-[32px] border border-orange-50/50">
                        <h3 className="font-bold mb-3">Ask for help clearly</h3>
                        <p className="text-sm text-gray-500 leading-relaxed">Create structured requests with category, urgency, AI suggestions, and tags that attract the right people.</p>
                    </div>
                    <div className="bg-[#f0f7ff] p-8 rounded-[32px] border border-blue-50/50">
                        <h3 className="font-bold mb-3">Discover the right people</h3>
                        <p className="text-sm text-gray-500 leading-relaxed">Use the explore feed, helper lists, and messaging to move quickly once a match happens.</p>
                    </div>
                    <div className="bg-[#f4fdf4] p-8 rounded-[32px] border border-green-50/50">
                        <h3 className="font-bold mb-3">Track real contribution</h3>
                        <p className="text-sm text-gray-500 leading-relaxed">Trust scores, badges, solved requests, and rankings help the community recognize meaningful support.</p>
                    </div>
                </div>
            </section> */}

            {/* <section className="max-w-7xl mx-auto mb-20">
                <div className="flex justify-between items-end mb-8">
                    <h2 className="text-2xl font-bold">Community problems currently in motion</h2>
                    <button className="bg-white border border-gray-100 px-4 py-1.5 rounded-full text-xs font-bold shadow-sm">View full feed</button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white p-8 rounded-[32px] shadow-sm border border-gray-50">
                        <div className="flex gap-2 mb-4">
                            <span className="bg-green-50 text-green-600 text-[10px] px-3 py-1 rounded-full font-bold uppercase">Web Development</span>
                            <span className="bg-red-50 text-red-500 text-[10px] px-3 py-1 rounded-full font-bold">High</span>
                            <span className="bg-gray-50 text-gray-400 text-[10px] px-3 py-1 rounded-full font-bold">Solved</span>
                        </div>
                        <h3 className="font-bold text-lg mb-4 leading-snug">Need help making my portfolio responsive before demo day</h3>
                        <p className="text-sm text-gray-400 mb-6 line-clamp-2">My HTML/CSS portfolio breaks on tablets and I need layout guidance...</p>

                        <div className="flex gap-2 mb-8">
                            <span className="bg-gray-100 text-gray-500 text-[10px] px-3 py-1 rounded-md">HTML/CSS</span>
                            <span className="bg-gray-100 text-gray-500 text-[10px] px-3 py-1 rounded-md">Responsive</span>
                        </div>

                        <div className="flex justify-between items-center pt-6 border-t border-gray-50">
                            <div>
                                <p className="font-bold text-sm">Sara Noor</p>
                                <p className="text-[10px] text-gray-400 uppercase">Karachi • 1 helper interested</p>
                            </div>
                            <button className="bg-gray-50 text-black px-5 py-2 rounded-full text-xs font-bold">Open details</button>
                        </div>
                    </div>
                    <div className="bg-white p-8 rounded-[32px] shadow-sm border border-gray-50 opacity-60">
                        <p className="text-center text-gray-400 mt-20">Sample Card 2</p>
                    </div>
                    <div className="bg-white p-8 rounded-[32px] shadow-sm border border-gray-50 opacity-60">
                        <p className="text-center text-gray-400 mt-20">Sample Card 3</p>
                    </div>
                </div>
            </section> */}
        </>
    )
}