'use server'

import { revalidatePath } from 'next/cache'

export async function get(props) {
  revalidatePath('/')
  console.log(props);
}