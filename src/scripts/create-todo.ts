import { createConnection } from 'typeorm'; 
import { Todo } from '../app/entities';

export const schema = {
  additionalProperties: false,
  properties: {
    text: { type: 'string' }
  },
  required: ['text'],
  type: 'object',
};

export async function main(args: any) {
  const connection = await createConnection();

  try {
    // Create a new task with the text given in the command line.    
    const todo = new Todo();
    todo.text = args.text;

    console.log(await todo.save());
  } catch (error) {
    console.error(error);
  } finally {
    await connection.close();
  }
}
