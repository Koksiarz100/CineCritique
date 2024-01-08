import React, { useState } from 'react';
import '../styles/reviews.scss';

interface Review {
  id: number;
  movie: string;
  rating: string;
  rev: string;
}
const ReviewComponent: React.FC = () => {
    const [expandedReviews, setExpandedReviews] = useState<number[]>([]);
  
    const reviews: Review[] = [
    { id: 1, movie: 'Spider-Man: Homecoming', rating: '4', rev:'"Spider-Man: Homecoming" to film, który znacząco ożywia i odświeża klasyczną postać Spider-Mana w ramach Marvel Cinematic Universe. Reżyser Jon Watts z powodzeniem przekształca superbohaterskie dzieje na nowo, koncentrując się na młodocianym Peterze Parkerze, czyniąc go jednocześnie bardziej ziemskim i autentycznym. Tom Holland, wcielając się w rolę tytułowego bohatera, wnosi do postaci świeżość i energię, które doskonale współgrają z tonem filmu. Najważniejszym elementem w "Spider-Man: Homecoming" jest fakt, że skupia się na aspektach życia nastolatka Petera Parkera. Zamiast ponownie opowiadać historię powstania Spider-Mana, film wprowadza nas w codzienne wyzwania Petera, jak szkoła średnia, przyjaźnie i pierwsze miłości. Ta ludzka strona bohatera dodaje głębi i sprawia, że widzowie łatwiej utożsamiają się z postacią. Względy emocjonalne są równie ważne, a relacje między postaciami są jednym z kluczowych atutów filmu. Tony Stark (Robert Downey Jr.) pełni rolę mentora dla Petera, co przynosi nie tylko elementy humorystyczne, ale i dźwięczne porady dla młodego bohatera. Ta dynamiczna relacja stanowi integralną część fabuły, dodając głębi zarówno Spider-Manowi, jak i całemu Marvel Cinematic Universe. Jednak nie brakuje również spektakularnych scen akcji. Walki Spider-Mana z przestępcami oraz epickie starcia z złoczyńcą Vulture (Michael Keaton) są widowiskowe i trzymają widza w napięciu. Efekty specjalne są imponujące, a dynamiczna reżyseria sprawia, że film nigdy nie traci tempa. Humor to kolejny kluczowy element "Spider-Man: Homecoming". Dialogi są błyskotliwe, a momenty komediowe doskonale współgrają z atmosferą filmu. Łącząc te elementy, twórcy stworzyli produkcję, która trafia zarówno do młodszej, jak i starszej publiczności. Warto również docenić solidne przedstawienie postaci złoczyńcy. Michael Keaton jako Vulture wnosi do roli zarówno grozę, jak i pewną złożoność psychologiczną, co czyni go jednym z bardziej udanych antagonistów w świecie Marvela. Podsumowując, "Spider-Man: Homecoming" to pełnometrażowy sukces, który rewitalizuje postać Spider-Mana i wprowadza nowe, fascynujące aspekty do Marvel Cinematic Universe. Świetna obsada, solidna fabuła, efekty specjalne oraz równowaga między akcją a elementami ludzkimi sprawiają, że film jest nie tylko rozrywką dla fanów komiksów, ale także produkcją zdolną przyciągnąć szeroką publiczność. To naprawdę udane wejście Spider-Mana do świata MCU.' },
    { id: 2, movie: 'Deadpool 2.', rating: '4', rev:'"Deadpool 2" to kolejna eksplozja czarnego humoru, absurdalnych sytuacji i bezkompromisowej akcji. Ryan Reynolds ponownie doskonale wciela się w postać nieszablonowego antybohatera, dostarczając widzom mnóstwo śmiechu i nieoczekiwanych zwrotów akcji. Film utrzymuje ton pierwszej części, równocześnie wprowadzając nowe postacie i dynamiczne sekwencje akcji. Dla fanów komedii akcji i nietypowych superbohaterów, "Deadpool 2" to z pewnością gratka.' },
    { id: 3, movie: 'Jumanji: Następny Poziom', rating: '4', rev:'"Jumanji: Następny Poziom" to kolejna udana podróż do świata przygody i humoru. Film utrzymuje charakterystyczny urok serii, wprowadzając jednocześnie nowe elementy i wyzwania dla bohaterów. Dobra chemia między aktorami oraz świeże podejście do konceptu Jumanji sprawiają, że produkcja jest pełna emocji i rozrywki. To przyjemny sequel, który dostarcza zarówno fanom poprzednich filmów, jak i nowym widzom. Warto dać się ponieść tej wirtualnej przygodzie.' },
  ];
  const toggleReview = (id: number) => {
    if (expandedReviews.includes(id)) {
      setExpandedReviews(expandedReviews.filter((reviewId) => reviewId !== id));
    } else {
      setExpandedReviews([...expandedReviews, id]);
    }
  };

  return (
 <div className='review-loop'>
      {reviews.map((review) => (
        <div key={review.id} className='review-item'>
          <div className='movie-title'>
            Recenzja dla: {review.movie}
          </div>
          <div className='movie-rating'>
            Ocena: {review.rating}
          </div>
          <div className='movie-review'>
            {expandedReviews.includes(review.id)
              ? review.rev
              : review.rev.length > 500
              ? `${review.rev.slice(0, 500)}...`
              : review.rev}
          </div>
          <div className='review-button'>
            {review.rev.length > 500 && (
              <button onClick={() => toggleReview(review.id)}>
                {expandedReviews.includes(review.id) ? 'Zwiń' : 'Rozwiń'}
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReviewComponent;
