import { cn } from '@/lib/utils';
import type { Difficulty } from '@/types/route';
import { DIFFICULTIES, DIFFICULTY_LABELS } from '@/types/route';

interface DifficultyChipsProps {
  selected: Difficulty[];
  onChange: (selected: Difficulty[]) => void;
  className?: string;
}

const difficultyColors: Record<Difficulty, string> = {
  T1: 'bg-primary/10 text-primary border-primary/20 hover:bg-primary/20',
  T2: 'bg-primary/10 text-primary border-primary/20 hover:bg-primary/20',
  T3: 'bg-amber-500/10 text-amber-600 border-amber-500/20 hover:bg-amber-500/20',
  T4: 'bg-orange-500/10 text-orange-600 border-orange-500/20 hover:bg-orange-500/20',
  T5: 'bg-destructive/10 text-destructive border-destructive/20 hover:bg-destructive/20',
  T6: 'bg-destructive/10 text-destructive border-destructive/20 hover:bg-destructive/20',
};

export function DifficultyChips({ selected, onChange, className }: DifficultyChipsProps) {
  const toggleDifficulty = (difficulty: Difficulty) => {
    if (selected.includes(difficulty)) {
      onChange(selected.filter(d => d !== difficulty));
    } else {
      onChange([...selected, difficulty]);
    }
  };

  return (
    <div className={cn('flex flex-wrap gap-2', className)} role="group" aria-label="Difficulty levels">
      {DIFFICULTIES.map((difficulty) => {
        const isSelected = selected.includes(difficulty);
        return (
          <button
            key={difficulty}
            type="button"
            onClick={() => toggleDifficulty(difficulty)}
            aria-pressed={isSelected}
            className={cn(
              'px-3 py-1.5 rounded-full text-sm font-medium border transition-colors',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
              isSelected
                ? difficultyColors[difficulty]
                : 'bg-muted text-muted-foreground border-border hover:bg-muted/80'
            )}
          >
            {difficulty}
          </button>
        );
      })}
    </div>
  );
}

export function DifficultyBadge({ difficulty, className }: { difficulty: Difficulty; className?: string }) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold border',
        difficultyColors[difficulty],
        className
      )}
      title={DIFFICULTY_LABELS[difficulty]}
    >
      {difficulty}
    </span>
  );
}
