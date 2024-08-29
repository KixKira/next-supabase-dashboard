export type IPermission = {
  id: string;
  created_at: string;
  role: "user" | "admin";
  status: "active" | "resigned";
  member_id: string;
  member: {
    id: string;
    name: string;
    created_at: string;
    email: string;
  };
};

export type IContests = {
  name_contest: string;
  code_contest: string;
  URL_contest: string;
  date_start_contest: string;
  date_end_contest: string;
};

export type IParticipants = {
  DNI_participant: string;
  name_participant: string;
  lastname_participant: string;
  email_participant: string;
  phone_ws_participant: string;
  free_ticket: string;
  created_at: string;
};
