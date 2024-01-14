type AppointmentListType = {
    no: number;
    doctor: string;
    appDate: string;
    appTime: string;
    bookDate: string;
    bookTime: string;
};

export const Appointment:AppointmentListType[] = [
    {
        no: 1,
        doctor: 'Dr. Smith',
        appDate: '2022-12-01',
        appTime: '10:00 AM',
        bookDate: '2022-11-25',
        bookTime: '08:30 AM',
      },
      {
        no: 2,
        doctor: 'Dr. Johnson',
        appDate: '2022-12-05',
        appTime: '02:30 PM',
        bookDate: '2022-11-28',
        bookTime: '10:45 AM',
      },
]