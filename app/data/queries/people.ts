import { sanityClient } from '~/data/config/sanity-client';
import type { PeopleModel } from '~/data/models/people-model';

export function getPeople() {
    return sanityClient.fetch<PeopleModel[]>(`*[_type == 'people']`);
}
