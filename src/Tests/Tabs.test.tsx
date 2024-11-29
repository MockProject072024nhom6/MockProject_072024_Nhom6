import Tabs from "@/Components/SharedComponents/Tabs"
import { render, fireEvent } from "@testing-library/react"

describe("Tabs()", () => {
  it("should change the activeKey when handleTabChange is called", () => {
    const { getByText, queryByText } = render(
      <Tabs profile='Profile' billingAddress='Billing Address' confirmation='Confirmation' />
    )
    // Kiểm tra nếu tab mặc định là Profile
    expect(getByText("Profile")).toBeInTheDocument()
    expect(queryByText("Billing Address")).toBeNull() // Không hiển thị tab Billing Address ban đầu
    // Click để chuyển sang tab Billing Address
    fireEvent.click(getByText("Billing Address"))

    // Kiểm tra xem Billing Address đã được hiển thị chưa
    expect(getByText("Billing Address")).toBeInTheDocument()
    expect(queryByText("Profile")).toBeNull() // Profile không còn được hiển thị
    // Click để chuyển sang tab Confirmation
    fireEvent.click(getByText("Confirmation"))

    // Kiểm tra xem Confirmation tab đã được hiển thị chưa
    expect(getByText("Confirmation")).toBeInTheDocument()
    expect(queryByText("Billing Address")).toBeNull()
  })
})
