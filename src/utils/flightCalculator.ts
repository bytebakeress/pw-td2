import  { type planet } from '../Typeplanet';
import { Starship } from '../Starship';

export function calculateFlightDurationFromEarth(planet: planet, starship: Starship, unity: 'hours' | 'days' = 'hours'): number {
    const duréTrajet = planet.distanceFromEarth / starship.speed;
    return unity === 'days' ? duréTrajet / 24 : duréTrajet;
}