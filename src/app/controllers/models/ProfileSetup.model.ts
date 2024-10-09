class ProfileSetupModel {
  diet = [];
  full_name = '';
  birth_date = new Date();
  aboutFrundify = '';
  gender = '';
  email = '';
  images = [];
  industry = '';
  interests = [];
  jobTitle = '';
  jobDescription = '';
  experience = 0;
  registered_token = '';
  privacy = false;
  reason = '';
  profile_image = '';
  clearModel = () => {
    this.diet = [];
    this.full_name = '';
    this.birth_date = new Date();
    this.aboutFrundify = '';
    this.gender = '';
    this.email = '';
    this.images = [];
    this.industry = '';
    this.interests = [];
    this.jobTitle = '';
    this.jobDescription = '';
    this.experience = 0;
    this.registered_token = '';
    this.privacy = false;
    this.reason = '';
    this.profile_image = '';
  };
}

const ProfileSetup = new ProfileSetupModel();
export default ProfileSetup;
