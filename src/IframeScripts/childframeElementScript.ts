interface ApplicationDimensions {
  width: number;
  height: number;
}

class ChildIframeElementResizer {
  public element: HTMLElement | null;
  private resizeObserver: ResizeObserver | undefined;

  constructor(elementId: string) {
    this.element = document.getElementById(elementId);
  }

  instantiateResizeObserver(): void {
    const observer = new ResizeObserver((entries) => {
      const entry = entries[0];

      const width = entry.contentRect.width;
      const height = entry.contentRect.height;

      console.log(`height: ${height}`);
      console.log(`width: ${width}`);

      const transferObject: ApplicationDimensions = {
        width,
        height,
      };
      window.parent.postMessage(transferObject, "*");
    });

    this.resizeObserver = observer;
  }

  observeResizeObserver() {
    const notNullElement: HTMLElement =
      this.element != null ? this.element : new HTMLElement();
    this.resizeObserver?.observe(notNullElement);
  }
}

export default ChildIframeElementResizer;
