{
  /**
   * Print Loading State
   */
  // Discriminated Union
  // If you have a class with a "literal member" then you can use that property to discriminate between union members.

  type LoadingState = {
    state: 'loading';
  };

  type SuccessState = {
    state: 'success';
    response: {
      body: string;
    };
  };

  type FailState = {
    state: 'fail';
    reason: string;
  };

  type ResourceLoadState = LoadingState | SuccessState | FailState;

  printLoginState({ state: 'loading' }); // 👀 loading...
  printLoginState({ state: 'success', response: { body: 'loaded' } }); // 😃 loaded
  printLoginState({ state: 'fail', reason: 'no network' }); // 😱 no network

  function printLoginState(resourceLoadState: ResourceLoadState): void {
    const { state } = resourceLoadState;
    switch (state) {
      case "loading":
        console.log('👀 loading...');
        break;
      case "success":
        console.log('😃 loaded');
        break;
      case "fail":
        console.log('😱 no network');
        break;
      default:
        throw new Error(`unknown state: ${state}`);
    }
  }
}
