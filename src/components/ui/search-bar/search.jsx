import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function Search() {
  return (
    <div className='flex w-full max-w-sm items-center shadow-[0_0px_2px_] rounded-[5px]'>
      <Button
        className=' w-12 bg-zinc-200 hover:bg-zinc-100 rounded-br-none rounded-tr-none focus:outline-none shadow-none' // Ajuste a largura conforme necessário
        type='submit'
      >
        <img src='/search.svg' alt='search' />
      </Button>
      <Input
        type='text'
        placeholder='Search'
        className=' dark:text-text-dark rounded-bl-none rounded-tl-none border-0 focus:border-0 focus:outline-none shadow-none dark:border border-white' // Remover bordas e foco
      />
    </div>
  );
}
