import { createFileRoute } from "@tanstack/react-router";
import "../App.css";
import { Github, Linkedin, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
	component: App,
});

function App() {
	return (
		<div className="min-h-screen bg-black flex flex-col items-center justify-center">
			{/* Profile Section */}
			<div className="flex flex-col items-center mb-8 max-w-2xl px-4">
				<img
					src="/palmithor.jpg"
					alt="Pálmi Þór Valgeirsson"
					className="w-16 h-16 rounded-full object-cover mb-4"
				/>
				<h1 className="text-white text-2xl font-bold mb-4">
					Pálmi Þór Valgeirsson
				</h1>
				<p className="text-gray-500 text-sm text-center leading-relaxed">
					Fullstack software developer located in Reykjavík, Iceland.
					<br />
					Using Bun for everything I can nowadays, with experience in Java, Kotlin, and IaC.
				</p>
			</div>

			<img
				src="/palmithor-is-a-dev.png"
				alt="palmithor is a dev"
				className="w-96 h-auto object-contain mb-8"
			/>
			<div className="flex space-x-4">
				<Button
					variant="ghost"
					size="icon"
					asChild
					className="text-white hover:text-blue-400 hover:bg-white/10"
				>
					<a
						href="https://linkedin.com/in/palmithor/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Linkedin className="h-4 w-4" />
					</a>
				</Button>
				<Button
					variant="ghost"
					size="icon"
					asChild
					className="text-white hover:text-gray-400 hover:bg-white/10"
				>
					<a
						href="https://github.com/palmithor"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Github className="h-4 w-4" />
					</a>
				</Button>
				<Button
					variant="ghost"
					size="icon"
					asChild
					className="text-white hover:text-blue-300 hover:bg-white/10"
				>
					<a
						href="https://x.com/palmithor"
						target="_blank"
						rel="noopener noreferrer"
					>
						<X className="h-4 w-4" />
					</a>
				</Button>
			</div>
		</div>
	);
}
