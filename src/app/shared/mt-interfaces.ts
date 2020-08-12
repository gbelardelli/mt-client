
export class mtCalendar
{
    public static readonly daysOfWeek = ['Domenica','Lunedì','Martedì','Mercoledì','Giovedì','Venerdì','Sabato'];
    public static readonly monthsOfYear = ['Gennaio','Febbraio','Marzo','Aprile','Maggio','Giugno','Luglio','Agosto','Settembre','Ottobre','Novembre','Dicembre'];

    startDayOfWeek = 1;

    getStartOfWeek()
    {
        let today = new Date();
        let day = today.getDay();
        let diff = today.getDate() - day;
        if( this.startDayOfWeek )
        {
            diff += (day == 0 ? -6 : this.startDayOfWeek );
        }
        let newDate = new Date(today.setDate(diff));
        newDate.setHours(0,0,0);

        return newDate;
    }

    getThisWeekArray()
    {
        let week = [];
        let start = this.getStartOfWeek();
        week.push(start);
        
        //console.log("primo getThisWeekArray", start);
        //console.log("primo array", week);

        let next = new Date( start );
        for(let i=0; i<6; i++)
        {
            next.setDate(next.getDate() + 1);
            
            //console.log("next getThisWeekArray", next);
            
            week.push(new Date(next));
            
        }
        console.log("next array", week);
        return week;
    }
    getEndOfPreviousMonth()
    {
        let today = new Date();
        let newDate = new Date(today.setDate(0));
        newDate.setHours(23,59,59);
        return newDate;
    }

    toNumber( date: Date )
    {
        return Number.parseInt(date.getFullYear() + ('0' + (date.getMonth()+1)).slice(-2) + ('0' + date.getDate()).slice(-2));
    }
}




export enum PracticeGoalType
{
    GOAL_NONE = 0,
    GOAL_TEMPO = 1,
    GOAL_USER = 2
}

export enum PracticeScheduleType
{
    SCHED_NONE = 0,
    SCHED_DAYSOFWEEK = 1,
    SCHED_DAYSOFMONTH = 2,
}

export enum PracticeMood
{
    MOOD_NONE = 0,
    MOOD_MAD = 1,
    MOOD_POOR = 2,
    MOOD_CONFUSED = 3,
    MOOD_DIFFICULT = 4,
    MOOD_NEUTRAL = 5,
    MOOD_GOOD = 6,
    MOOD_GREAT = 7
}
 
export interface PracticeGoal
{
    goalID: number;
    goalType: PracticeGoalType;
    goalText: string;
    goalValue: number;
}

export interface PracticeSchedule
{
    scheduleId: number;
    scheduleType: PracticeScheduleType;
    scheduleValue: number;
}

export interface PracticeItemNote
{
    noteId: number;
    noteDate: string;
    noteText: string;
}

export interface PracticeItem
{
    id: number;
    title: string;
    categoryID: number;
    instrumentID: number;
    description: string;
    duration: number;
    durationDesc: string;
    startDate: string;
    endDate: string;
    goalDesc: string;
    scheduleDesc: string;
    totalTime: number;
    lastPractice: string;
    archived: boolean;
}

export interface PracticeSession
{
    practiceItem: PracticeItem;
    itemPriority: number;
    practiceDate: string;
    idPracticeSession: number;
    practiceMood: PracticeMood;
    practiceSummary: string;
    practiceDuration: number;
    sessionStatus: number;
}

export interface PracticeRoutine
{
    practiceDate: string;
    practiceSessions: PracticeSession[];
}