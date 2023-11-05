import { IBillboard } from '@/entities/Billboard';

interface IBillboardProps {
  data: IBillboard;
}

export function Billboard({ data }: IBillboardProps) {
  return (
    <div className="rounded-xl p-4 sm:p-6 lg:p-8 overflow-hidden">
      <div
        style={{ backgroundImage: `url(${data?.imageUrl})` }}
        className="bg-cover aspect-square md:aspect-[2.1/1] rounded-xl relative overflow-hidden"
      >
        <div className="w-full h-full flex flex-col justify-center items-center gap-y-8 text-center">
          <div className="text-3xl sm:text-5xl lg:text-6xl font-bold max-w-xs sm:max-w-xl">
            {data.label}
          </div>
        </div>
      </div>
    </div>
  );
}
