export default [
  {
    id: 'notify_on_failure_alert',
    title: 'Failure alerts',
    description: 'When possible failures are detected',
  },
  {
    id: 'print_job',
    title: 'Print job events',
    description: 'Upon start/end/cancellation of a print job',
    subcategories: [
      {
        id: 'notify_on_print_done',
        title: 'When print is done',
        enabledByDefault: true,
      },
      {
        id: 'notify_on_print_cancelled',
        title: 'When print is cancelled',
        enabledByDefault: false,
      },
      {
        id: 'notify_on_filament_change',
        title: 'When printer needs attention',
        description: 'Such as filament change or run-out',
        enabledByDefault: true,
      },
      /*
      {
        id: 'notify_on_other_print_events',
        title: 'When other event happens',
        description: 'Such as start, pause, and resume',
        enabledByDefault: false,
      },
      */
      /* by zzh 20240107
       notify_on_other_print_events => 
       notify_on_print_start
       notify_on_print_pause
       notify_on_print_resume
      */
      {
        id: 'notify_on_print_start',
        title: 'When start event happens',
        description: 'start',
        enabledByDefault: false,
      },
      {
        id: 'notify_on_print_pause',
        title: 'When pause event happens',
        description: 'pause',
        enabledByDefault: false,
      },
      {
        id: 'notify_on_print_resume',
        title: 'When resume event happens',
        description: 'resume',
        enabledByDefault: false,
      },
    ],
  },
  {
    id: 'notify_on_heater_status',
    title: 'Heater status change',
    description: 'Heater reached target or cooled down',
  },
]
