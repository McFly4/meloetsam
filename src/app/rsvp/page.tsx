'use client';

import { useState, FormEvent } from 'react';
import Image from "next/image";

export default function Page() {
	const [formData, setFormData] = useState({
		nom: '',
		email: '',
		presenceConfirmee: false,
		accompagne: false,
		nomAccompagnant: '',
		enfants: [''],
		agesEnfants: '',
		restrictionsAlimentaires: '',
		chansonPreferee: '',
		questionsCommentaires: ''
	});

	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
	const [errorMessage, setErrorMessage] = useState('');

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);
		setSubmitStatus('idle');
		setErrorMessage('');

		try {
			const response = await fetch('/api/rsvp', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					...formData,
					enfants: formData.enfants.filter(e => e.trim() !== '')
				}),
			});

			const data = await response.json();

			if (!response.ok) {
				throw new Error(data.error || 'Failed to send RSVP');
			}

			setSubmitStatus('success');
			// Reset form
			setFormData({
				nom: '',
				email: '',
				presenceConfirmee: false,
				accompagne: false,
				nomAccompagnant: '',
				enfants: [''],
				agesEnfants: '',
				restrictionsAlimentaires: '',
				chansonPreferee: '',
				questionsCommentaires: ''
			});
		} catch (error) {
			setSubmitStatus('error');
			setErrorMessage(error instanceof Error ? error.message : 'Une erreur est survenue');
		} finally {
			setIsSubmitting(false);
		}
	};

	const addEnfantField = () => {
		setFormData(prev => ({
			...prev,
			enfants: [...prev.enfants, '']
		}));
	};

	const removeEnfantField = (index: number) => {
		setFormData(prev => ({
			...prev,
			enfants: prev.enfants.filter((_, i) => i !== index)
		}));
	};

	const updateEnfant = (index: number, value: string) => {
		setFormData(prev => ({
			...prev,
			enfants: prev.enfants.map((e, i) => i === index ? value : e)
		}));
	};

	return (
		<div>
			<div className="relative w-full h-[445px]">
				<Image
					src="/programme/programHeader.jpg"
					alt="Programme Header"
					fill
					className="object-cover"
					priority
				/>
				<div className="absolute inset-0 bg-black/20" />
				<h1 className="absolute inset-0 flex items-center justify-center text-[64px] font-medium text-white z-10 font-[family-name:var(--font-playfair-display)]">
					FAQ
				</h1>
			</div>
			<div className="w-full min-h-screen py-12 px-6">
				<div className="max-w-2xl mx-auto">
					<h1 className="text-4xl md:text-5xl font-medium text-center mb-8 font-[family-name:var(--font-playfair-display)]">
						RSVP
					</h1>

					{submitStatus === 'success' && (
						<div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
							✅ Merci ! Votre réponse a été envoyée avec succès.
						</div>
					)}

					{submitStatus === 'error' && (
						<div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-800">
							❌ {errorMessage}
						</div>
					)}

					<form onSubmit={handleSubmit} className="space-y-6">
						{/* Nom et Prénom */}
						<div>
							<label htmlFor="nom" className="block text-sm font-medium mb-2">
								Nom et Prénom *
							</label>
							<input
								type="text"
								id="nom"
								required
								value={formData.nom}
								onChange={(e) => setFormData(prev => ({ ...prev, nom: e.target.value }))}
								className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
								placeholder="Votre nom complet"
							/>
						</div>

						{/* Email */}
						<div>
							<label htmlFor="email" className="block text-sm font-medium mb-2">
								Email *
							</label>
							<input
								type="email"
								id="email"
								required
								value={formData.email}
								onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
								className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
								placeholder="votre@email.com"
							/>
						</div>

						{/* Présence confirmée */}
						<div className="flex items-center">
							<input
								type="checkbox"
								id="presenceConfirmee"
								checked={formData.presenceConfirmee}
								onChange={(e) => setFormData(prev => ({ ...prev, presenceConfirmee: e.target.checked }))}
								className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
							/>
							<label htmlFor="presenceConfirmee" className="ml-3 text-sm font-medium">
								Serez-vous présent(e) ?
							</label>
						</div>

						{/* Accompagné */}
						<div className="flex items-center">
							<input
								type="checkbox"
								id="accompagne"
								checked={formData.accompagne}
								onChange={(e) => setFormData(prev => ({ ...prev, accompagne: e.target.checked }))}
								className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
							/>
							<label htmlFor="accompagne" className="ml-3 text-sm font-medium">
								Serez-vous accompagné(e) ?
							</label>
						</div>

						{/* Nom de l'accompagnant (conditionnel) */}
						{formData.accompagne && (
							<div>
								<label htmlFor="nomAccompagnant" className="block text-sm font-medium mb-2">
									Nom et prénom de l&apos;accompagnant
								</label>
								<input
									type="text"
									id="nomAccompagnant"
									value={formData.nomAccompagnant}
									onChange={(e) => setFormData(prev => ({ ...prev, nomAccompagnant: e.target.value }))}
									className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
									placeholder="Nom de votre accompagnant"
								/>
							</div>
						)}

						{/* Enfants */}
						<div>
							<label className="block text-sm font-medium mb-2">
								Prénom des enfants
							</label>
							{formData.enfants.map((enfant, index) => (
								<div key={index} className="flex gap-2 mb-2">
									<input
										type="text"
										value={enfant}
										onChange={(e) => updateEnfant(index, e.target.value)}
										className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
										placeholder={`Prénom de l'enfant ${index + 1}`}
									/>
									{formData.enfants.length > 1 && (
										<button
											type="button"
											onClick={() => removeEnfantField(index)}
											className="px-4 py-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition-colors"
										>
											-
										</button>
									)}
								</div>
							))}
							<button
								type="button"
								onClick={addEnfantField}
								className="mt-2 px-4 py-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition-colors"
							>
								+ Ajouter un enfant
							</button>
						</div>

						{/* Âge des enfants */}
						<div>
							<label htmlFor="agesEnfants" className="block text-sm font-medium mb-2">
								Âge des enfants
							</label>
							<input
								type="text"
								id="agesEnfants"
								value={formData.agesEnfants}
								onChange={(e) => setFormData(prev => ({ ...prev, agesEnfants: e.target.value }))}
								className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
								placeholder="Ex: 5 ans, 8 ans"
							/>
						</div>

						{/* Restrictions alimentaires */}
						<div>
							<label htmlFor="restrictionsAlimentaires" className="block text-sm font-medium mb-2">
								Restrictions alimentaires à nous signaler
							</label>
							<textarea
								id="restrictionsAlimentaires"
								value={formData.restrictionsAlimentaires}
								onChange={(e) => setFormData(prev => ({ ...prev, restrictionsAlimentaires: e.target.value }))}
								rows={3}
								className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none"
								placeholder="Allergies, régimes spéciaux, etc."
							/>
						</div>

						{/* Chanson préférée */}
						<div>
							<label htmlFor="chansonPreferee" className="block text-sm font-medium mb-2">
								Proposez votre chanson préférée pour le DJ
							</label>
							<input
								type="text"
								id="chansonPreferee"
								value={formData.chansonPreferee}
								onChange={(e) => setFormData(prev => ({ ...prev, chansonPreferee: e.target.value }))}
								className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
								placeholder="Titre - Artiste"
							/>
						</div>

						{/* Questions/Commentaires */}
						<div>
							<label htmlFor="questionsCommentaires" className="block text-sm font-medium mb-2">
								Questions ? Commentaires ?
							</label>
							<textarea
								id="questionsCommentaires"
								value={formData.questionsCommentaires}
								onChange={(e) => setFormData(prev => ({ ...prev, questionsCommentaires: e.target.value }))}
								rows={4}
								className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none"
								placeholder="Vos questions ou commentaires"
							/>
						</div>

						{/* Submit button */}
						<button
							type="submit"
							disabled={isSubmitting}
							className="w-full px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
						>
							{isSubmitting ? 'Envoi en cours...' : 'Envoyer'}
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}
