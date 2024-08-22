<?php
// Database connection
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "sgm_overview";

$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get the guard ID from the URL
$guard_id = $_GET['id'];

// Fetch the guard data from the database
$sql = "SELECT * FROM guards WHERE guard_id = '$guard_id'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();
} else {
    echo "No guard found with ID: " . $guard_id;
    exit();
}

// Handle form submission for updating or deleting the guard
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_POST['delete_guard'])) {
        // Delete guard
        $delete_sql = "DELETE FROM guards WHERE guard_id='$guard_id'";
        if ($conn->query($delete_sql) === TRUE) {
            echo "Guard deleted successfully";
            header("Location: index.php"); // Redirect back to the main page
            exit();
        } else {
            echo "Error deleting record: " . $conn->error;
        }
    } else {
        // Update guard
        $name = $_POST['name'];
        $gender = $_POST['gender'];
        $dob = $_POST['dob'];
        $phone_number = $_POST['phone_number'];
        $address = $_POST['address'];
        $status = $_POST['status'];

        $update_sql = "UPDATE guards SET 
                        name='$name', 
                        gender='$gender', 
                        date_of_birth='$dob', 
                        phone_number='$phone_number', 
                        address='$address', 
                        status='$status' 
                       WHERE guard_id='$guard_id'";

        if ($conn->query($update_sql) === TRUE) {
            echo "Record updated successfully";
            header("Location: index.php"); // Redirect back to the main page
            exit();
        } else {
            echo "Error updating record: " . $conn->error;
        }
    }
}

$conn->close();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Edit Guard - XpressGuards</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
</head>
<body>
    <div class="container">
        <h3>Edit Guard</h3>
        <form method="post" action="">
            <div class="form-group">
                <label for="name">Name</label>
                <input type="text" class="form-control" id="name" name="name" value="<?php echo $row['name']; ?>" required>
            </div>
            <div class="form-group">
                <label for="gender">Gender</label>
                <select class="form-control" id="gender" name="gender" required>
                    <option value="Male" <?php if ($row['gender'] == 'Male') echo 'selected'; ?>>Male</option>
                    <option value="Female" <?php if ($row['gender'] == 'Female') echo 'selected'; ?>>Female</option>
                </select>
            </div>
            <div class="form-group">
                <label for="dob">Date of Birth</label>
                <input type="date" class="form-control" id="dob" name="dob" value="<?php echo $row['date_of_birth']; ?>" required>
            </div>
            <div class="form-group">
                <label for="phone_number">Phone Number</label>
                <input type="text" class="form-control" id="phone_number" name="phone_number" value="<?php echo $row['phone_number']; ?>" required>
            </div>
            <div class="form-group">
                <label for="address">Address</label>
                <input type="text" class="form-control" id="address" name="address" value="<?php echo $row['address']; ?>" required>
            </div>
            <div class="form-group">
                <label for="status">Status</label>
                <select class="form-control" id="status" name="status" required>
                    <option value="Active" <?php if ($row['status'] == 'Active') echo 'selected'; ?>>Active</option>
                    <option value="Inactive" <?php if ($row['status'] == 'Inactive') echo 'selected'; ?>>Inactive</option>
                </select>
            <button type="submit" class="btn btn-primary">Save changes</button>
            <a href="index.php" class="btn btn-secondary">Cancel</a>
            <button type="submit" name="delete_guard" class="btn btn-danger" onclick="return confirm('Are you sure you want to delete this guard?');">Delete</button>
        </form>
    </div>
</body>
</html>
