import { Profile } from "./profile";
import { ValidationState } from "./validation";

export type RootState = {
  profile: Profile;
  validation: ValidationState;
};