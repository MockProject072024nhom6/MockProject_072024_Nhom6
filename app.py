from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.exc import SQLAlchemyError
from datetime import datetime

app = Flask(__name__)

# Cấu hình kết nối SQL Server
app.config['SQLALCHEMY_DATABASE_URI'] = (
    'mssql+pyodbc://sa:1234@localhost/DB_MockProject_072024'
    '?driver=ODBC+Driver+17+for+SQL+Server'
)
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

class Account(db.Model):
    __tablename__ = 'Accounts'
    account_id = db.Column(db.String(10), primary_key=True)
    first_name = db.Column(db.String(255), nullable=False)
    last_name = db.Column(db.String(255), nullable=False)
    phone_number = db.Column(db.String(20))
    email = db.Column(db.String(255), unique=True, nullable=False)
    current_password = db.Column(db.String(100))
    new_password = db.Column(db.String(100))
    confirm_password = db.Column(db.String(100))
    avatar = db.Column(db.String(1024))
    role = db.Column(db.String(20))
    gender = db.Column(db.String(10))
    register_time = db.Column(db.DateTime)
    status = db.Column(db.String(20))
    staff_id = db.Column(db.String(10))
    guard_id = db.Column(db.String(10))
    supervisor_id = db.Column(db.String(10))
    admin_id = db.Column(db.String(10))
    customer_id = db.Column(db.String(10))
    manager_id = db.Column(db.String(10))
    address_id = db.Column(db.String(10))
    organization = db.Column(db.String(1024))
    account_type = db.Column(db.String(20))

class Address(db.Model):
    __tablename__ = 'Addresses'
    address_id = db.Column(db.String(10), primary_key=True)
    city = db.Column(db.String(255))
    country = db.Column(db.String(255))
    stage = db.Column(db.String(1024))
    address_line_1 = db.Column(db.String(1024))
    address_line_2 = db.Column(db.String(1024))

#Cau hinh API Accounts
@app.route('/accounts', methods=['GET'])
def get_accounts():
    accounts = Account.query.all()
    return jsonify([{
        'account_id': account.account_id,
        'first_name': account.first_name,
        'last_name': account.last_name,
        'phone_number': account.phone_number,
        'email': account.email,
        'avatar': account.avatar,
        'role': account.role,
        'gender': account.gender,
        'register_time': account.register_time.isoformat() if account.register_time else None,
        'status': account.status,
        'staff_id': account.staff_id,
        'guard_id': account.guard_id,
        'supervisor_id': account.supervisor_id,
        'admin_id': account.admin_id,
        'customer_id': account.customer_id,
        'manager_id': account.manager_id,
        'address_id': account.address_id,
        'organization': account.organization,
        'account_type': account.account_type
    } for account in accounts])

@app.route('/accounts', methods=['POST'])
def add_account():
    data = request.json
    try:
        new_account = Account(
            account_id=data['account_id'],
            first_name=data['first_name'],
            last_name=data['last_name'],
            phone_number=data.get('phone_number'),
            email=data['email'],
            current_password=data.get('current_password'),
            new_password=data.get('new_password'),
            confirm_password=data.get('confirm_password'),
            avatar=data.get('avatar'),
            role=data.get('role'),
            gender=data.get('gender'),
            register_time=datetime.fromisoformat(data.get('register_time')) if data.get('register_time') else None,
            status=data.get('status'),
            staff_id=data.get('staff_id'),
            guard_id=data.get('guard_id'),
            supervisor_id=data.get('supervisor_id'),
            admin_id=data.get('admin_id'),
            customer_id=data.get('customer_id'),
            manager_id=data.get('manager_id'),
            address_id=data.get('address_id'),
            organization=data.get('organization'),
            account_type=data.get('account_type')
        )
        db.session.add(new_account)
        db.session.commit()
        return jsonify({'message': 'Account added successfully', 'account_id': new_account.account_id}), 201
    except SQLAlchemyError as e:
        db.session.rollback()
        return jsonify({'message': str(e)}), 400

@app.route('/accounts/<account_id>', methods=['DELETE'])
def delete_account(account_id):
    account = Account.query.get(account_id)
    if account:
        try:
            db.session.delete(account)
            db.session.commit()
            return jsonify({'message': 'Account deleted successfully'})
        except SQLAlchemyError as e:
            db.session.rollback()
            return jsonify({'message': str(e)}), 400
    return jsonify({'message': 'Account not found'}), 404

@app.route('/accounts/<account_id>', methods=['PUT'])
def update_account(account_id):
    data = request.json
    account = Account.query.get(account_id)
    if account:
        try:
            account.first_name = data.get('first_name', account.first_name)
            account.last_name = data.get('last_name', account.last_name)
            account.phone_number = data.get('phone_number', account.phone_number)
            account.email = data.get('email', account.email)
            account.current_password = data.get('current_password', account.current_password)
            account.new_password = data.get('new_password', account.new_password)
            account.confirm_password = data.get('confirm_password', account.confirm_password)
            account.avatar = data.get('avatar', account.avatar)
            account.role = data.get('role', account.role)
            account.gender = data.get('gender', account.gender)
            account.register_time = datetime.fromisoformat(data.get('register_time')) if data.get('register_time') else account.register_time
            account.status = data.get('status', account.status)
            account.staff_id = data.get('staff_id', account.staff_id)
            account.guard_id = data.get('guard_id', account.guard_id)
            account.supervisor_id = data.get('supervisor_id', account.supervisor_id)
            account.admin_id = data.get('admin_id', account.admin_id)
            account.customer_id = data.get('customer_id', account.customer_id)
            account.manager_id = data.get('manager_id', account.manager_id)
            account.address_id = data.get('address_id', account.address_id)
            account.organization = data.get('organization', account.organization)
            account.account_type = data.get('account_type', account.account_type)

            db.session.commit()
            return jsonify({'message': 'Account updated successfully'})
        except SQLAlchemyError as e:
            db.session.rollback()
            return jsonify({'message': str(e)}), 400
    return jsonify({'message': 'Account not found'}), 404

#Cau hinh API Address
@app.route('/addresses', methods=['GET'])
def get_addresses():
    addresses = Address.query.all()
    return jsonify([{
        'address_id': address.address_id,
        'city': address.city,
        'country': address.country,
        'stage': address.stage,
        'address_line_1': address.address_line_1,
        'address_line_2': address.address_line_2
    } for address in addresses])

@app.route('/addresses', methods=['POST'])
def add_address():
    data = request.json
    try:
        new_address = Address(
            address_id=data['address_id'],
            city=data.get('city'),
            country=data.get('country'),
            stage=data.get('stage'),
            address_line_1=data.get('address_line_1'),
            address_line_2=data.get('address_line_2')
        )
        db.session.add(new_address)
        db.session.commit()
        return jsonify({'message': 'Address added successfully', 'address_id': new_address.address_id}), 201
    except SQLAlchemyError as e:
        db.session.rollback()
        return jsonify({'message': str(e)}), 400

@app.route('/addresses/<address_id>', methods=['DELETE'])
def delete_address(address_id):
    address = Address.query.get(address_id)
    if address:
        try:
            db.session.delete(address)
            db.session.commit()
            return jsonify({'message': 'Address deleted successfully'})
        except SQLAlchemyError as e:
            db.session.rollback()
            return jsonify({'message': str(e)}), 400
    return jsonify({'message': 'Address not found'}), 404

@app.route('/addresses/<address_id>', methods=['PUT'])
def update_address(address_id):
    data = request.json
    address = Address.query.get(address_id)
    if address:
        try:
            address.city = data.get('city', address.city)
            address.country = data.get('country', address.country)
            address.stage = data.get('stage', address.stage)
            address.address_line_1 = data.get('address_line_1', address.address_line_1)
            address.address_line_2 = data.get('address_line_2', address.address_line_2)

            db.session.commit()
            return jsonify({'message': 'Address updated successfully'})
        except SQLAlchemyError as e:
            db.session.rollback()
            return jsonify({'message': str(e)}), 400
    return jsonify({'message': 'Address not found'}), 404

if __name__ == '__main__':
    with app.app_context():
        db.create_all()  # Tạo các bảng nếu chưa tồn tại
    app.run(debug=True)
