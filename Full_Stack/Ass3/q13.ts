class Logger {
	@logMethod
	log(message: string): void 
	{
		console.log(message);
	}
}

function logMethod(target: any, key: string, descriptor: PropertyDescriptor) 
{
	const method = descriptor.value;
	descriptor.value = function (...args: any[]) 
	{
		console.log(`\nCalling method: '${key}'\nwith arguments:`, args);
		const result = method.apply(this, args);
		return result;
	};
	return descriptor;
}

const logger = new Logger();
logger.log("This is the message\n");
