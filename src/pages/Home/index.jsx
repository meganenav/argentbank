import { useEffect } from "react"
import Hero from "../../components/Home/Hero"
import Features from "../../components/Home/Features"

export default function Home() {
	useEffect(() => 
        { document.title="Argent Bank" }
    )

	return (
		<main>
			<Hero />
			<Features />
		</main>
	)
}