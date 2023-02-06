import { Injectable } from '@angular/core';
import { Entry, createClient } from 'contentful';

import { environment } from '../environments';

const {
  contentful: {
    accessToken,
    space,
  },
} = environment;

@Injectable({
  providedIn: 'root'
})
export class ContentfulService {
  private cdaClient = createClient({
    accessToken,
    space,
  });

  async getProducts(query?: object): Promise<Entry<any>[]> {
    const res = await this.cdaClient.getEntries({
      content_type: 'event-page',
      ...query,
    });
    return res.items;
  }
}
