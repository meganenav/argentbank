import { useEffect } from "react"
import Hero from "../../components/Home/Hero"
import Features from "../../components/Home/Features"

export default function Home() {
	useEffect(() => 
        { document.title="Argent Bank" }
    )

	//Call the Hero and Features components
	return (
		<main>
			<Hero />
			<Features />
		</main>
	)
}