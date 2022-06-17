## Cloud Architecture Diagram
![architectrue](https://user-images.githubusercontent.com/99190374/174309236-7198506f-c3a2-4066-9376-fe8787df8ad9.png)

## Setup on Google Cloud Platform and deploy API
1. Set up a Google Cloud Platform project and enable billing.
2. Download the GCP SDK to install Google Cloud CLI on your computer with the tutorial at the following link:  https://cloud.google.com/sdk/docs/install-sdk
3. Set up Firestore in a GCP project
    - In the Google Cloud Platform Console, click the Firestore menu, then click the Select Native Mode button
4. Clone the github repository to your computer.
    ```
    git clone https://github.com/HydroMon/hydromon-cloud-computing.git
    ```
5. Create key service account to link GCP project with back-end application 
    - Create service account:
      - Open the Service Account page or on the Google Cloud Console, select the **IAM & Admin menu > Service Account**
      - Click the **+ CREATE SERVICE ACCOUNT** button in the top navigation bar
      - Enter the service account details according to the fields provided. Fill in the name in the **Service account name** field, then the **Service account ID** field will be filled automatically according to the name filled in.
      - Click **Create and Continue**.
      - Select the **Role** for the service account according to the access you want to give.
      - Click **Done** if finished.
    - Create service account key:
      - Click on the email service account that was created earlier.
      - Select the **KEYS** tab
      - Click the **ADD KEY** dropdown and select **Create new key**
      - Select the **JSON** key type, then click **CREATE**
      - The key in the form of ```.json``` file will be downloaded automatically
6. Move the json key service account file into the directory cloned from the previous repository
7. Make ```.env``` file
    ```
    TOKEN_SECRET = <RANDOM_STRING>
    ```
8. Make sure you are in the desired GCP Project
    - Open a terminal into the previous cloned folder
    - Type the following command to see the list of GCP projects
      ```
      gcloud projects list
      ```
    - Type the following command to set the project you want to use
      ```
      gcloud config set project <PROJECT_ID>
      ```
9. Deploy to GCP with the App Engine service
    ```
    gcloud app deploy
    ```
10. Select the server location according to the closest location
11. Wait until the deployment process is complete. When finished, the application can be opened with the command:
    ```
    gcloud app browse
    ```
    The intended link can be used as the API base url

## API Documentation:
https://documenter.getpostman.com/view/13459345/UzBiPULP
