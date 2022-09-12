class NotificationService {
  // we use this object to display succes and failure messages

  public success(message: string): string {
    return this.success(message);
  }

  public error(err: any): string {
    return this.error(this.extractErrorMessage(err));
  }

  private extractErrorMessage(err: any) {
    // axios received  an error array from backend"
    if (Array.isArray(err.response?.data)) return err.response.data[0];

    // axios received  an error string from backend"
    if (typeof err.response?.data === "string") return err.response.data;

    // front throw "blah..."
    if (typeof err.message === "string") return err.message;

    console.dir(err); // if non of the above is right
    return "Some error occured, please try again";
  }
}

const notificationService = new NotificationService();
export default notificationService;
