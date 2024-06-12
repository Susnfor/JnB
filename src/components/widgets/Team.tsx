import Headline from '../common/Headline';
import { TeamProps } from '~/shared/types';
import WidgetWrapper from '../common/WidgetWrapper';
import ItemTeam from '../common/ItemTeam';



const Team = ({ header, teams, id, hasBackground = false, ifDesc = false, }: TeamProps) => (
  <WidgetWrapper id={id ? id : ''} hasBackground={hasBackground} containerClass="">
    {header && !ifDesc && <Headline header={header} titleClass="text-2xl sm:text-5xl" />}
    <div className="flex items-stretch justify-center">
      <div className="grid grid-cols-1 gap-4 dark:text-white  ">
        {teams && teams.map(({ name, occupation, image, items }, index) => (
          <div key={`item-team-${index}`} className="p-2">
            <ItemTeam
              name={name}
              occupation={occupation}
              image={image}
              items={items}
              containerClass=""
              imageClass="h-72 w-60 rounded-md object-cover shadow-lg bg-gray-500 dark:bg-slate-700"
              panelClass="relative mt-3 text-center"
              nameClass="mb-1.5 text-xl font-bold"
              occupationClass="mb-7 text-base font-medium capitalize text-gray-600 dark:text-slate-400"
              itemsClass="absolute right-[-10px] top-[-290px] block list-none rounded-md bg-white/70 shadow-[0_0_8px_rgba(0,0,0,0.2)] backdrop-blur-sm dark:bg-white/40"
            />
          </div>
        ))}
      </div>
    </div>
{header && ifDesc && <Headline header={header} titleClass="text-2xl sm:text-3xl" />}
  </WidgetWrapper>
);

export default Team;
