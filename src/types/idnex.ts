export interface ICategory {
    id: number;
    title: string;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
}
export interface ITask {
    id: number;
   title: string;
    description: string | null;
    category: ICategory | null;
    is_completed: boolean;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
}

export const tasks :ITask[] = [
{
title: 'подъём',
id: 1,
description: '9pm',
category: null,
is_completed: false,
created_at: new Date(),
updated_at: new Date(),
deleted_at: new Date(),
},
{
title: 'сон',
id: 2,
description: '9am',
category: null,
is_completed: true,
created_at: new Date(),
updated_at: new Date(),
deleted_at: new Date(),
},
{
title: 'завтрак',
id: 3,
description: '2pm',
category: null,
is_completed: false,
created_at: new Date(),
updated_at: new Date(),
deleted_at: new Date(),
}
]