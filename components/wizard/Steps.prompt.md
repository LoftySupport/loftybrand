One-line: short sequences where the pages are peers — a three-panel tour, a paged empty state. For a form the user must complete in order, use MultiStepIndicator.

```jsx
<Steps activeStep={i} onChange={setI} steps={[<TourOne/>, <TourTwo/>, <TourThree/>]} />
<Steps type="numbers" activeStep={i} onChange={setI} steps={pages} />
```

Keep it to five pages. The active dot widens rather than changing size, so the row does not shift.
