type InputArgs = Record<string, unknown>;

export interface Job {
  readonly result: string[];
  readonly credits_used: number;
  readonly id: string;
  status: string;
  deployment_id: string;
  duration: number;
  eta: number;
  etr: number;
  files: string[];
  logs: string;
}

export interface Deployment {
  readonly name: string;
  readonly id: string;
  job: Job;
  status: string;
  job_id: string
  logs: string;
  model_id: string;
  output_format: string;
  output_width: number;
  output_height: number;
}

export interface DeploymentInput {
  name: string;
  args: InputArgs;
  model: string;
  sync?: boolean;
  output_format?: string;
  output_width?: number;
  output_height?: number;
}
