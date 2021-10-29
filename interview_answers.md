# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What are the main differences between a stateful and a functional component?

    - Class Component(Stateful), Functional Component(Stateless)
    - A stateful component is a Class object, whereas a functional component is a function
    - Stateful components give you access to component lifecycle react methods, where as functional components have the useEffect hook to achieve similar results.
    - Class components were originally necessary to manage state in a component, now functional components can do the same through the useSate hook.


2. When does a componentWillMount function be called? What about a componentWillUpdate?

    componentWillMount will be called whenever the component mounts to the DOM, 
    componentWillUpdate is called anytime the component updates as a result of state or props changing.

3. Define stateful logic.

    Stateful logic  any code that uses state.
    Stateful logic is some behaviors including hook and custom hook with state, use behavior to change state.

4. What are the three step of creating a successful test? What is done in each phase?

    The three steps in creating a successful test is to Arrange, Act, and Assert.

    - Arrange: the component that you are testing and make sure it renders correctly.
    - Act: you initialize the elements that you going to test to variables, you also do any userEvents that you are testing for during this phase.
    - Assert: write out your expectations for what should happen, such as expecting text to appear on the screen or a certain element to be present in the DOM

